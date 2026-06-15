import Banner from "../../components/banner"
import { useSearchParams } from "react-router";

export default function SearchPage(){
    import { useSearchParams } from "react-router";


    useEffect(() => {
        axios.get('http://localhost:8000/api/posts/')
            .then(response => {
                console.log("Fetched posts:", response.data);
                setPosts(response.data.results);
                setNextPage(response.data.next);
            })
            .catch(error => {
                console.error("Error fetching posts:", error);
            });
    }, []);

    return (
        <div className="main-page">
            <Banner />
            <div className="main-content">
                <SearchBar />
                <div className="content">
                    <div className="posts">
                        {posts.length > 0 && posts.map(post => (
                            <Post key={post.id} post={post} />
                        ))}
                    </div>
                    <SideBar />
                </div>
            </div>
        </div>
    );
}