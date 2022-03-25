import styles from './Landing.module.css'

const Landing = (props) => {
  props.user ? console.log(props.user.name) : console.log("butts")
  return (
    <main className={styles.container}>
      <h1>
        hello, {props.user ? props.user.name : "friend"}
      </h1>
    </main>
  )
}
 
export default Landing