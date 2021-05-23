import styles from './LoadingAnimation.module.css'

const LoadingAnimation = () => {
    return (
        <>
           <div class={`${styles.ldsEllipsis}`}>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
            </div> 
        </>
    )
}

export default LoadingAnimation
