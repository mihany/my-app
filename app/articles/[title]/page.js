export default function showArticlePage(props){
    console.log(props.title);
    return(
        <div>
            <h1>Show Articles</h1>
            <h1>{props.params.title}</h1>
        </div>
    );
}

