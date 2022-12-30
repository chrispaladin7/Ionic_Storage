import { IonAlert, IonBackButton, IonBadge, IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonPage, IonRow, IonTextarea, IonTitle, IonToolbar, RouterDirection, useIonRouter } from '@ionic/react';
import React, { useRef } from 'react';
import { useState } from 'react';
import './Firstpage.css';

import { useStorage } from '../hooks/useStorage';



  const Firstpage: React.FC = () => {
 
  
    const {todo,addTodo}=useStorage();
    const [fullname,setFullname]=useState('');
     

  
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
        
            {/* <Link to={{
  
                pathname:"/Hello/parameter-data",
                state:{stateParam:true}
            }}>zzdfsdf</Link> */}
          <IonContent className="ion-padding">
            <IonGrid className='ion-text-top ion-margin'>
              <IonRow>
               
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
          <IonGrid>
        <IonRow>
          <IonCol>1</IonCol>
          <IonCol>2</IonCol>
          <IonCol>3</IonCol>
        </IonRow>
      </IonGrid>

      <IonGrid>
        <IonRow>
          <IonCol>1</IonCol>
          <IonCol>2</IonCol>
          <IonCol>3</IonCol>
          <IonCol>4</IonCol>
          <IonCol>5</IonCol>
          <IonCol>6</IonCol>
        </IonRow>
      </IonGrid>

      <IonGrid>
        <IonRow>
          <IonCol>1</IonCol>
          <IonCol>2</IonCol>
          <IonCol>3</IonCol>
          <IonCol>4</IonCol>
          <IonCol>5</IonCol>
          <IonCol>6</IonCol>
          <IonCol>7</IonCol>
          <IonCol>8</IonCol>
          <IonCol>9</IonCol>
          <IonCol>10</IonCol>
          <IonCol>11</IonCol>
          <IonCol>12</IonCol>
        </IonRow>
      </IonGrid>s
          </IonContent>
  
        </IonPage>
  
      </React.Fragment>
      
  );
};

export default Firstpage;