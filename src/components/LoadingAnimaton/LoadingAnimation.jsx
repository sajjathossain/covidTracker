import styles from './LoadingAnimation.module.css'

const LoadingAnimation = () => {
    return (
        <>
           <div className={`${styles.ldsEllipsis}`}>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
            </div> 
        </>
    )
}

export default LoadingAnimation
