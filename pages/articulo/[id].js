import styles from '../../styles/Article.module.scss';

export default function DynamicRoute({ title, tags, content, coverImage, user, date }) {
  
  return (
    <div className={styles.container}>
      <img className={styles.coverImage} src={coverImage} />
      <h1 className={styles.title}>{title}</h1>
      <ul className={styles.ul}>
        {tags.map((tag, key) => {
            return(
                <li className={styles.li} key={key}>#{tag}</li>
            )
        })}
      </ul>
      <div className={styles.user}>
         <img className={styles.userImg} src={user.profile_image} />
        <p className={styles.userName}>{user.name}</p> 
        <p className={styles.date}>{date}</p>
      </div>
      <p className={styles.text} dangerouslySetInnerHTML={{__html: content}}></p>
    </div>
    )
  }

  
  export async function getServerSideProps({ params }) {
    const { id } = params;
    const data = await fetch(`https://dev.to/api/articles/${id}`);
    const json = await data.json();
  
    return {
      props: {
        title: json.title,
        tags: json.tags,
        content: json.body_markdown,
        coverImage: json.cover_image,
        user: json.user,
        date: json.readable_publish_date
      }
    };
  }