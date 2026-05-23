import "@/app/style/style.css"


export default function Header(){
    return(
        <>
            <div id="Header">
                <div id="Baner">
                    nazwaPozdro
                </div>
                <div id="HeaderButtons">
                    <button className="Button"><a href="">stworz post</a></button>
                    <button className="Button" > zaloguj sie </button>
                </div>
            </div>
        </>
    )
}
