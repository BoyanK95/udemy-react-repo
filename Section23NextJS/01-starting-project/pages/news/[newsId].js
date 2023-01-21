import { useRouter } from 'next/router'

//domain.com/news/[something]

function DetailsPage() {
    const router = useRouter()

    const newsId = router.query.newsId
    console.log(newsId);

    return <h1>The Details Page</h1>
}

export default DetailsPage
