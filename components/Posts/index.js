import Post from '../Post';
import styles from '../../styles/Posts.module.scss';

export default function Posts({ blog, searchParams, title }){
  return(
    <div className={styles.posts}>
      <h2 className={styles.title}>{title}</h2>
    {blog.filter((item) => {
      return item.title.toLowerCase().includes(searchParams.toLowerCase());
    }).map((item, key) => {
      return(
        <Post item={item} key={key} />
      )
    })}
    </div>
  )
}