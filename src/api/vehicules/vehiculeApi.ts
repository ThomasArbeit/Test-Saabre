export const fetchVehiculesList = async (limit: number, offset: number) => {
 try {
   const response = await fetch(`https://saabre-fake-api.osc-fr1.scalingo.io/cars?limit=${limit}&offset=${offset}`);
   
   if (!response.ok) {
     throw new Error('Failed to fetch vehicles list');
   }

   const data = await response.json();
   return data;
 } catch (error) {
   console.error('Error fetching vehicles list:', error);
   throw error;
 }
};


export const fetchVehiculeById = async (vehiculeId: string) => {
 try {
   const response = await fetch(`https://saabre-fake-api.osc-fr1.scalingo.io/cars/${vehiculeId}`);
   
   if (!response.ok) {
     throw new Error(`Failed to fetch vehicle with ID: ${vehiculeId}`);
   }

   const data = await response.json();
   return data;
 } catch (error) {
   console.error(`Error fetching vehicle with ID ${vehiculeId}:`, error);
   throw error;
 }
};