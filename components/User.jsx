export default function User({ image, name, title, mail }) {


return(
<article className="user-card">
    <img src={image} alt={name} />
    <h2>{name}</h2>
    <p>{title}</p>
    <a href={`mailto:${mail}`}>{mail}</a>
</article>
);
}