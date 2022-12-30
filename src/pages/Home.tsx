import { IonAlert, IonBackButton, IonBadge, IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonLabel, IonList, IonMenu, IonMenuButton, IonNav, IonNavLink, IonPage, IonRow, IonTextarea, IonTitle, IonToolbar, RouterDirection, useIonRouter } from '@ionic/react';

import {star} from 'ionicons/icons';
import React, { useRef, useState } from 'react';
import './Home.css';
import { useStorage } from '../hooks/useStorage';
import Firstpage from './Firstpage';
import Page from './Page';



  const Home: React.FC = () => {
  const router = useIonRouter();
  const {todo,addTodo}=useStorage();
  const [fullname,setFullname]=useState('');

  const createTodo = async () => {
    await addTodo(fullname);
    setFullname('')
    // dynamicNavigate("./Firstpages.tsx", "forward")
  }

  const dynamicNavigate = (path:string, direction:RouterDirection) => {

    
    const action = direction === "forward" ? "push" : "pop";
      router.push(path, direction, action);
      // getname(text);
      // console.log(name);
    }
    
  return (
    <React.Fragment>



    <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">This is the menu content.</IonContent>
      </IonMenu>
    <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
          <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
      
         
        <IonContent className="ion-padding">
          
          <IonGrid className='ion-text-top ion-margin'>
            <IonRow>
              <IonCol className="ion-text-uppercase ion-justify-content-start">

            
               
                <IonInput type='text' value={fullname} onIonChange={(e)=>setFullname(e.detail.value!)} placeholder='Enter Name Here' ></IonInput>


              </IonCol>
              <IonCol>
             
              {/* <IonNavLink routerDirection="forward" component={() => <Page />}> */}
                {/* <IonButton routerLink={"/Firstpage"} routerDirection="none" id='click' onClick={createTodo}>
                 */}
                 <IonButton id='click' onClick={createTodo}>
                
                  <IonIcon icon={star} />
                    
                  Click
                </IonButton>
                {/* </IonNavLink> */}
              </IonCol>
              <IonCol>
              <IonBadge slot="start">11</IonBadge>
                 <IonCardContent>
              
                  <IonList>
                    {todo.map((todo,key)=>(
                      <p key={key}>{todo.fullname}</p>
                    ))}
                  </IonList>
                </IonCardContent> 

              </IonCol>
              
            </IonRow>

          </IonGrid>

        </IonContent>
        <IonContent>
          
        </IonContent>

      </IonPage>

    </React.Fragment>
  );
};

export default Home;

