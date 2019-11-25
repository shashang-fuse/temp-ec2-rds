import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
  
{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '이유리',
  'birthday' : '971123',
  'gender' : '여자',
  'job' : '대학생'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '이지은',
  'birthday' : '980503',
  'gender' : '여자',
  'job' : '프로그래머'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '한효주',
  'birthday' : '941226',
  'gender' : '여자',
  'job' : '대학생'

}]

class App extends Component {
  render(){
    return(
      <div>
        {
          // map 함수를 이용함으로써 특정한 배열의 각 원소에 접근하여 어떻게 처리할지 명시할 수 있다. 
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                //map을 이용할 때는 key를 사용해야 한다
                id={c.id}
                image={c.name}
                name={c.name}
                birthday={c.name}
                gender={c.gender}
                job={c.job}
              />
              );
            })
          }
      {/* <Customer
        id={customers[0].id}
        image={customers[0].image}
        name={customers[0].name}
        birthday={customers[0].birthday}
        gender={customers[0].gender}
        job={customers[0].job}
      />
      <Customer
        id={customers[1].id}
        image={customers[1].image}
        name={customers[1].name}
        birthday={customers[1].birthday}
        gender={customers[1].gender}
        job={customers[1].job}
      />
      <Customer
        id={customers[2].id}
        image={customers[2].image}
        name={customers[2].name}
        birthday={customers[2].birthday}
        gender={customers[2].gender}
        job={customers[2].job}
      /> */}
      </div>
    );
  }
}

export default App;
