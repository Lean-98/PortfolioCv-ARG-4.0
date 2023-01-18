const name1 = document.querySelector('#name1');
const last1 = document.querySelector('#last1');
const name2 = document.querySelector('#name2');
const last2 = document.querySelector('#last2');
const mail = document.querySelector('#mail');
const telephone = document.querySelector('#telephone');


      const generateUsers = async () => {
        try {
            const url = 'https://randomuser.me/api/?gender=male';
            const reply = await fetch(url);
            const { results } = await reply.json();
            const datos = results[0];

            // console.log(datos)
            name1.textContent = datos.name.first
            last1.textContent = datos.name.last
            name2.textContent = datos.name.first
            last2.textContent = datos.name.last
            mail.textContent = datos.email
            telephone.textContent = datos.phone
        } catch (error) {
            console.log(error)
        }
      }

document.addEventListener('DOMContentLoaded', generateUsers());      