

export const GifItem = ({title, url, id}) => {
    return (
        <div className="card">
            <img src={url} alg={title}></img>
            <p>{title}</p>
        </div>
  )
}
