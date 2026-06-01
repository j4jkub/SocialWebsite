export default function MobileSideBar() {
    const OpenMenu = () => {
        const menu = document.querySelector('.mobile-side-bar-background');
        const sidebar = document.querySelector('.mobile-side-bar-content');
        menu.classList.remove('disabled');
        document.body.style.overflow = "hidden"
        sidebar.classList.remove('disabled');
        document.body.classList.add("no-scroll")
    }

    const CloseMenu = () => {
        const menu = document.querySelector('.mobile-side-bar-background');
        const sidebar = document.querySelector('.mobile-side-bar-content');
        menu.classList.add('disabled');
        sidebar.classList.add('disabled');
        document.body.classList.remove("no-scroll")
        document.body.style.overflow = "visible"
    }

    return (
        <div className="mobile-side-bar">
            <button className="hamburger-menu" onClick={OpenMenu}>
                ☰
            </button>
            <div className="mobile-side-bar-background disabled" onClick={CloseMenu}></div>
                <div className="mobile-side-bar-content disabled">
                    <h2>Mobile Side Bar</h2>
                    <p>This is the mobile side bar content.</p>
                </div>
        </div>
    );
}