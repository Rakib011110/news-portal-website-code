//menu section in javaScript
const categoryUrl = 'https://openapi.programming-hero.com/api/news/categories';

fetch(categoryUrl)
    .then(responese => responese.json())
    .then(category => displayCategory(category.data.news_category));

function displayCategory(category) {
    for (const newsCategory of category) {
        // console.log(newsCategory)
        const categoryContainer = document.getElementById('category')
        const categoryLi = document.createElement('li');
        categoryLi.innerHTML = `
            <a id="menuButton" onclick="news('${newsCategory.category_id}')" class="text-decoration-none btn menuButton" href="#">${newsCategory.category_name}</a>
        `
        categoryContainer.appendChild(categoryLi)
    }

    // spnner start
    togglePinner(true)

};

// news section in 
const news = (id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`
    fetch(url)
        .then(response => response.json())
        .then(news => displayNews(news.data))

};

const displayNews = (newsData) => {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';
    for (const newsCategory of newsData) {
        console.log(newsCategory);
        const div = document.createElement('div');
        div.classList.add("card");
        div.classList.add("mt-3");
        div.innerHTML = `
        <div class="row g-0">
        <div class="col-md-4">
            <img src="${newsCategory.image_url}" class="img-fluid h-100 p-4 rounded-5" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body me-2">
                <div class="overflow-hidden mt-3 mb-2" style="height: 240px;">
                    <h5 class="card-title fs-3">${newsCategory.title}</h5>
                    <p class="card-text " style="height: 150px;">${newsCategory.details}
                    </p>
                </div>

                <div class="d-flex justify-content-between align-items-center" style="height: 80px;">
            <div class="d-flex">
                <img class="img-fluid rounded-circle" style="height: 50px;" src="${newsCategory.author.img}" alt="">
                <div class="ms-3">
                    <p class="m-0 fw-semibold">${newsCategory.author.name}</p>
                    <p class="m-0 fw-semibold text-color">${newsCategory.author.published_date}</p>
                </div>
            </div>
            <p class="d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width: 25px; height: 25px;">
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                 <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clip-rule="evenodd" />
                </svg>
                <span class="fw-semibold">${newsCategory.total_view} k</span>
            </p>
            <div class="d-none d-lg-block">
                <p class="d-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width: 120px; height: 120px;">
                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                        </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"class="w-6 h-6">
                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                </p>
                </div>
                    <button onclick="modalDetalis('${newsCategory._id}')" class="btn btn-sm btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#newsModal">Read More</button>
                </div>
            </div>
        </div>
            </div>
        </div>
        `
        newsContainer.appendChild(div)


    }
    // spinner stop

    togglePinner(false)



}

const modalDetalis = (id) => {
    fetch(`https://openapi.programming-hero.com/api/news/${id}`)
        .then(responese => responese.json())
        .then(detalis => modalDetalisAdded(detalis.data[0]))
}
const modalDetalisAdded = details => {
    const detailsTitle = document.getElementById('newsModalLabel');
    detailsTitle.innerText = `${details.title}`;
    const detailsBody = document.getElementById('detalis');
    detailsBody.innerHTML = `
    <div class="row row-cols-1">
        <div class="col">
            <div class="card">
                <img style="height:300px;" src="${details.thumbnail_url}" class="card-img-top" alt="">
                <div style="height:200px;" class="card-body border overflow-hidden">
                    <p class="card-text">${details.details}</p>
                </div>

                <div class="d-flex justify-content-around">
                    <div class="d-flex">
                        <img class="img-fluid rounded-circle" style="height: 50px;" src="${details.author.img}" alt="">
                        <div class="ms-3">
                            <p class="m-0 fw-semibold">${details.author.name}</p>
                            <p class="m-0 fw-semibold text-color">${details.author.published_date}</p>
                        </div>
                    </div>
                    <p class="d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width: 25px; height: 25px;">
                        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                    <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clip-rule="evenodd" />
                        </svg>
                        <span class="fw-semibold">${details.total_view} k</span>
                    </p>
                </div/
            </div>
            </div>
        </div>
    </div>
    `

}



//    loader 

const togglePinner = isLoading => {
    const loderSection = document.getElementById('btn-spin')

    if (isLoading) {
        loderSection.classList.remove('d-none')
    }
    else {
        loderSection.classList.add('d-none')
    }
}















// news('01')

