import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Index from './IndexPage'

function SecondPage(props) {
  function click() {
    console.log(props.count)
    props.dispatch({type: 'count/add'})
  }
  function reClick() {
    console.log(props.second)
    props.dispatch({type: 'second/addAfter1Second'})
  }
  
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>this is secondPage</h1>
      <div>props.count: {props.count}</div>
      
      <button onClick={click}>click</button> 
      <button onClick={reClick}>click</button> 
      <Index/>
    </div>
  );
}

SecondPage.propTypes = {
};


export default connect(({ count, second }) => ({ count, second }))(SecondPage);
