class Navbar extends HTMLElement{
    constructor(){
        super();
    }

connectedCallback(){
    this.innerHTML = `
    <nav class="secondary-purple navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html">Felicia 21st</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link" aria-current="page" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="wishes.html">Wishes</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="stories.html">Stories</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    `;
    }
}

customElements.define('navbar-component', Navbar)