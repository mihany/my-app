import Link from "next/link";

export const metadata = {
    title : 'Articles Page',
};

function articlesPage(){
    return(
        <div>
            <h3>Articles Page</h3>

            <Link href="/posts">
                <button>Take me to the post page</button>
            </Link>
        </div>
    );
}

export default articlesPage;