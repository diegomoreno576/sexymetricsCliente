import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../context';
import { setLoading } from '../actions';
import { setCurrentuser } from '../actions';
import currentUser  from '../services/currentUser';



const useData = (API_URL, START, END) => {
  const [state, dispatch] = useContext(ThemeContext);
  const [Data, setData] = useState([]);



  useEffect(() => {
    if(state.currentuser.length == 0){
      currentUser()
      .then(apidata => {
          dispatch(setCurrentuser(apidata));
          fetch(`${process.env.REACT_APP_BASEURL}${API_URL}?${process.env.REACT_APP_USERTOKEN}&blogId=${apidata.blog.code}&start=${START}&end=${END}&${process.env.REACT_APP_USERID}&${process.env.REACT_APP_USUARIO}`)
          .then((response) => response.json())
          .then((data) => setData(data,))
          .catch((error) => console.log(error.message));
        //  window.sessionStorage.setItem('jwt', data.token)
      })
      .catch(err => {
     //  window.sessionStorage.removeItem('jwt', jwt)
          console.error(err)
      })      
      dispatch(setLoading(false));
  }else{
    fetch(`${process.env.REACT_APP_BASEURL}${API_URL}?${process.env.REACT_APP_USERTOKEN}&blogId=${state.currentuser.blog.code}&start=${START}&end=${END}&${process.env.REACT_APP_USERID}&${process.env.REACT_APP_USUARIO}`)
      .then((response) => response.json())
      .then((data) => setData(data,))
      .catch((error) => console.log(error.message));
      
      dispatch(setLoading(false));
    }
  
  }, [state.TimeStart, state.TimeEnd]);
  return Data;
};

export default useData;
