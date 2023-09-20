import  Link  from 'next/link';
import styles from "./page.module.css";
import Image from 'next/image';
async function getData(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
export async function generateMetadata({ params}) {
  // read route params
  const id = params.id
  const product = await getData(id)
  return {
    title: product.title,
    description:product.description
}}
 
export default async function Post({params}) {
  const product = await getData(params.id)
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.info}>
          <h1 className={styles.title}>{product.title}</h1>    
          <p className={styles.desc}>{product.description}</p>
          </div>
          <div className={styles.imagecontainer}>
          <Image className={styles.image}
        src={product.thumbnail}
    fill
        alt='post'
        />   
        <span className={styles.auther}>kllkkk</span>
        </div>
        </header>  
        <div className={styles.content}>
        <div className={styles.gellary}>
          {
            product.images.map(img=>
              <Image key={product.id}
              src={img}
    height={100}
    width={100}
              alt='product image'
              />   
              )
          }
        </div>  
        <p className={styles.text}>
        nbxzbcnzxbcxsjfdf kthd hkd otdkckhgdct xchkfgrfnbxzbcnzxbcxsjfdf kthd hkd otdkckhgdct xchkfgrfnbxzbcnzxbcxsjfdf kthd hkd otdkckhgdct xchkfgrfnbxzbcnzxbcxsjfdf kthd hkd otdkckhgdct xchkfgrfnbxzbcnzxbcxsjfdf kthd hkd otdkckhgdct xchk
        fgrfnbxzbcnzxbcxsjfdf kthd hkd otdkckhgdct xchkfgrfnbxzbcnzxbcxsjfdf kthd hkd otdkckhgdct xchkfgrfnbxzbcnzxbcxsjfdf kthd hkd otdkckhgdct xchkfgrfnbxzbcnzxbcxsjfdf kthd hkd otdkckhgdct xchkfgrfnbxzbcnzxbcxsjfdf kthd hkd otdkckhgdct xchkfgrfnbxzbcnzxbcxsjfdf kthd hkd otdkckhgdct xchkfgrfnbxzbcnzxbcxsjfdf kthd hkd otdkckhgdct xchkfgrfnbxzbcnzxbcxsjfdf kthd hkd otdkckhgdct xchkfgrfnbxzbcnzxbcxsjfdf kthd hkd otdkckhgdct xchkfgrfnbxzbcnzxbcxsjfdf kthd hkd otdkckhgdct xchkfgrfnbxzbcnzxbcxsjfdf kthd hkd otdkckhgdct xchkfgrfnbxzbcnzxbcxsjfdf kthd hkd otdkckhgdct xchkfgrfnbxzbcnzxbcxsjfdf kthd hkd otdkckhgdct xchkfgrfnbxzbcnzxbcxsjfdf kthd hkd otdkckhgdct xchkfgrfnbxzbcnzxbcxsjfdf kthd hkd otdkckhgdct xchkfgrfnbxzbcnzxbcxsjfdf kthd hkd otdkckhgdct xchkfgrf.\
        fgrfnbxzbcnzxbcxsjfdf kthd hkd otdkckhgdct xchkfgrfnbxzbcnzxbcxsjfdf kthd hkd otdkckhgdct xchkfgrfnbxzbcnzxbcxsjfdf kthd hkd otdkckhgdct xchkfgrfnbxzbcnzxbcxsjfdf kthd hkd otdkckhgdct xchkfgrfnbxzbcnzxbcxsjfdf kthd hkd otdkckhgdct xchkfgrfnbxzbcnzxbcxsjfdf kthd hkd otdkckhgdct xchkfgrfnbxzbcnzxbcxsjfdf kthd hkd otdkckhgdct xchkfgrfnbxzbcnzxbcxsjfdf kthd hkd otdkckhgdct xchkfgrfnbxzbcnzxbcxsjfdf kthd hkd otdkckhgdct xchkfgrfnbxzbcnzxbcxsjfdf kthd hkd otdkckhgdct xchkfgrfnbxzbcnzxbcxsjfdf kthd hkd otdkckhgdct xchkfgrfnbxzbcnzxbcxsjfdf kthd hkd otdkckhgdct xchkfgrfnbxzbcnzxbcxsjfdf kthd hkd otdkckhgdct xchkfgrfnbxzbcnzxbcxsjfdf kthd hkd otdkckhgdct xchkfgrfnbxzbcnzxbcxsjfdf kthd hkd otdkckhgdct xchkfgrfnbxzbcnzxbcxsjfdf kthd hkd otdkckhgdct xchkfgrf.\    
        </p>   
        </div>
      
      </div> 
        )
  }