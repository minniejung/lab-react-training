import React from 'react';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import FaceBook from './components/FaceBook';
import SignupPage from './components/SignupPage';
import SingleColorPicker from './components/SingleColorPicker';

function App() {
  return (
    <>
      <h2>Iteration 1 - Id Card</h2>
      <h3>Component: IdCard</h3>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14').toString().slice(0, 15)}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11').toString().slice(0, 15)}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <h2>Iteration 2</h2>
      <h3>Component: Greetings</h3>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <h2>Iteration 3</h2>
      <h3>Component: Random</h3>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <h2>Iteration 4</h2>
      <h3>Component: BoxColor</h3>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <h2>Iteration 5</h2>
      <h3>Component: CreditCard</h3>
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />
      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />
      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white"
      />
      <h2>Iterations6</h2>
      <h3>Component: Rating</h3>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      <h2>Iteration 7</h2>
      <h3>Component: DriverCard</h3>
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: 'Toyota Corolla Altis',
          licensePlate: 'CO42DE',
        }}
      />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: 'Audi A3',
          licensePlate: 'BE33ER',
        }}
      />
      <h2>Iteration 8</h2>
      <h3>State: LikeButton</h3>
      <LikeButton />
      <LikeButton />
      <h2>Iteration 9</h2>
      <h3>State: ClickablePicture</h3>
      <ClickablePicture img="maxence.png" imgClicked="maxence-glasses.png" />
      <h2>Iteration 10</h2>
      <h3>State: Dice</h3>
      <Dice />
      <h2>Iteration 11</h2>
      <h3>State: Carousel</h3>
      <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
        ]}
      />
      <h2>Iteration 12 </h2>
      <h3>List and Keys | NumbersTable</h3>
      <NumbersTable limit={12} />
      <h2>Iteration 13 & 14</h2>
      <h3>List and Keys - FaceBook | Simple & Advanced</h3>
      <FaceBook />
      <h2>Iteration 15</h2>
      <h3>Form - SignupPage</h3>
      <SignupPage />
      <h2>Iteration 16</h2>
      <h3>Lifting State Up - RGBColorPicker</h3>
      <SingleColorPicker />
    </>
  );
}

export default App;
