let item1 = document.getElementById('item-1')
let item2 = document.getElementById('item-2')
let item3 = document.getElementById('item-3')

item1.addEventListener('mouseover', () => activateLatestNews(item1, item2, item3))

item2.addEventListener('mouseover',  () => activateLatestNews(item2, item1, item3))

item3.addEventListener('mouseover', () => activateLatestNews(item3, item1, item2))

function activateLatestNews(news1, news2, news3) {
    news1.classList.remove('latest-news-passive')
    news1.classList.add('latest-news-active')

    news2.classList.remove('latest-news-active')
    news2.classList.add('latest-news-passive')

    news3.classList.remove('latest-news-active')
    news3.classList.add('latest-news-passive')
}



let subscriptionsCards = document.getElementById('subscriptions-cards')

subscriptionsCards.addEventListener('mouseover', (event) => {
    event.target.classList.add('subscriptions-card-mouseover')
})


subscriptionsCards.addEventListener('mouseout', (event) => {
    event.target.classList.remove('subscriptions-card-mouseover')
})




let btvItems = document.getElementById('btv-items')

btvItems.addEventListener('mouseover', (event) => {
    event.target.classList.add('btv-item-mouseover')
})


btvItems.addEventListener('mouseout', (event) => {
    event.target.classList.remove('btv-item-mouseover')
})
