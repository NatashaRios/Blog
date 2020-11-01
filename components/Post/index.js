import Link from 'next/link';
import styles from '../../styles/Post.module.scss';

export default function Post({item}){
  return(
    <div className={styles.container}>
      <Link href={`/articulo/${item.id}`}>
        <a href='#'>
          <img className={styles.coverImg} src={item.cover_image} />
          <div className={styles.info}>
            <img className={styles.profileImg} src={item.user.profile_image} />
            <div className={styles.divInfo}>
              <p className={styles.user}>{item.user.name}</p>
              <p className={styles.date}>{item.readable_publish_date}</p>
            </div>
          </div>
          <h3 className={styles.title}>{item.title}</h3>
          <h4 className={styles.desc}>{item.description}</h4>
          <div className={styles.tags}>
            {item.tag_list.map((tag) => {
              return(
                <p className={styles.tag}>#{tag}</p>
              )
            })}
          </div>
          <div className={styles.divReaction}>
            <p className={styles.reactions}>🤍  {item.positive_reactions_count} reactions</p>
            <p className={styles.comments}>💬 {item.comments_count} comments</p>
          </div>
        </a>
      </Link>
    </div>
  )
}