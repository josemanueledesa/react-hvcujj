

import Ejercicio1 from '../components/Ejercicio1';
import Ejercicio2 from '../components/Ejercicio2';
import Ejercicio3 from '../components/Ejercicio3';
import bibliografia from '../components/bibliografia';
import Form from '../components/Form';
export const MenuItems = [

  {
    id: 1,
    path: '/Ejercicio1',
    title: 'ejercicio1',
    component: Ejercicio1,
  },
 
  {
    id: 2,
    path: '/Ejercicio2',
    title: 'ejercicio2',
    component: Ejercicio2,
  },
  {
    id: 3,
    path: '/Ejercicio3',
    title: 'ejercicio3',
    component: Ejercicio3,
  },
  {
    id: 4,
    path: '/Bibliografia',
    title: 'bibliografia',
    component: bibliografia,
  },
  {
    id: 5,
    path: '/Form',
    title: 'form',
    component: Form,
  },

 
];

/*
  path
  id
  title
  component

*/