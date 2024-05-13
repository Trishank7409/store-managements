import { useEffect,useState } from 'react'
import Card from '../components/Card';

const EmployeeDashboad = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const fetchStores = async () => {
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) {
        console.error('Access token not found in localStorage');
        return;
      }

      const headers = {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      };
      try {
        const response = await fetch('http://localhost:4000/api/v1/store/getAllStore',{method: 'GET',
        headers});
        if (!response.ok) {
          throw new Error('Failed to fetch stores');
        }
        const data = await response.json();
        console.log("data",data)
        setStores(data.data);
      } catch (error) {
        console.error('Error fetching stores:', error);
      }
    };

    fetchStores();
  }, [])

  return (
    <div className='p-10'>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap:"10px"}}>
      {stores.map((store) => (
        <Card key={store._id} store={store} />
      ))}
    </div>
  </div>
  )
}

export default EmployeeDashboad
