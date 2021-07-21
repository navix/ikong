import { Icon } from '@novyk/ikong';

export const menuIcon = (): Icon => ({
  name: 'menu',
  xml: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="currentColor"/></svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">`,
});

export const bookIcon = (): Icon => ({
  name: 'book',
  xml: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" fill="currentColor"/></svg>`,
});

export const dropIcon: Icon = {
  name: 'drop',
  xml: `
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24">
<path xmlns="http://www.w3.org/2000/svg" d="M12.6508 2.24073C12.2763 1.91974 11.7233 1.92007 11.3488 2.24106L11.2604 2.31823C11.2055 2.36654 11.1266 2.4368 11.0269 2.52728C10.8277 2.70819 10.5454 2.97036 10.2077 3.30004C9.5335 3.9582 8.63218 4.89144 7.72807 5.98928C6.8264 7.08416 5.90543 8.36263 5.206 9.71154C4.51106 11.0518 4 12.5279 4 14C4 18.4183 7.58172 22 12 22C16.4183 22 20 18.4183 20 14C20 12.5279 19.4889 11.0518 18.794 9.71154C18.0946 8.36263 17.1736 7.08416 16.2719 5.98928C15.3678 4.89144 14.4665 3.9582 13.7923 3.30004C13.4546 2.97036 13.1723 2.70819 12.9731 2.52728L12.6508 2.24073ZM6 14C6 12.9721 6.36394 11.8232 6.9815 10.6322C7.59457 9.44984 8.4236 8.29081 9.27193 7.26069C10.1178 6.23354 10.9665 5.35427 11.6048 4.73119C11.7483 4.59109 11.8809 4.46425 12 4.35191C12.1191 4.46425 12.2517 4.59109 12.3952 4.73119C13.0335 5.35427 13.8822 6.23354 14.7281 7.26069C15.5764 8.29081 16.4054 9.44984 17.0185 10.6322C17.6361 11.8232 18 12.9721 18 14C18 17.3137 15.3137 20 12 20C8.68629 20 6 17.3137 6 14Z" fill="currentColor"></path>
<path xmlns="http://www.w3.org/2000/svg" d="M8.35964 14.0416C7.8303 14.1991 7.52889 14.7559 7.68643 15.2853C8.11874 16.7378 9.26213 17.8812 10.7147 18.3135C11.244 18.4711 11.8009 18.1697 11.9584 17.6403C12.1159 17.111 11.8145 16.5542 11.2852 16.3966C10.48 16.157 9.84298 15.52 9.60334 14.7148C9.4458 14.1854 8.88897 13.884 8.35964 14.0416Z" fill="currentColor"></path>
</svg>
  `,
};

export const trashIcon: Icon = {
  name: 'trash',
  xml: `
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24">
<path xmlns="http://www.w3.org/2000/svg" d="M7 4C7 2.89543 7.89543 2 9 2H15C16.1046 2 17 2.89543 17 4V6H18.9897C18.9959 5.99994 19.0021 5.99994 19.0083 6H21C21.5523 6 22 6.44772 22 7C22 7.55228 21.5523 8 21 8H19.9311L19.0638 20.1425C18.989 21.1891 18.1182 22 17.0689 22H6.93112C5.88184 22 5.01096 21.1891 4.9362 20.1425L4.06888 8H3C2.44772 8 2 7.55228 2 7C2 6.44772 2.44772 6 3 6H4.99174C4.99795 5.99994 5.00414 5.99994 5.01032 6H7V4ZM9 6H15V4H9V6ZM6.07398 8L6.93112 20H17.0689L17.926 8H6.07398Z" fill="currentColor"></path>
</svg>
  `,
};
