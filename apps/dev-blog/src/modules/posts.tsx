// import { PostItems } from '../utils/Content';
// import { isEmpty } from '../utils/Utility';

// export interface IReducerPost {
//   postList: PostItems[];
//   searchList: PostItems[];
// }

// // 액션 정의
// export const SET_POSTS = 'posts/SET_POSTS';
// export const SEARCH_POSTS = 'posts/SEARCH_POSTS';
// export const RESET_POSTS = 'posts/RESET_POSTS';

// // 액션 함수 정의
// export const setPosts = (data: any[]) => ({
//   type: SET_POSTS,
//   payload: data,
// });
// export const searchPosts = (data: string) => ({
//   type: SEARCH_POSTS,
//   payload: data,
// });
// export const resetPosts = () => ({
//   type: SET_POSTS,
// });

// const initState: IReducerPost = {
//   postList: [],
//   searchList: [],
// };

// const posts = (action: any, state = initState) => {
//   const { type, payload } = action;
//   const inputVal = payload;

//   switch (type) {
//     case SET_POSTS:
//       return {
//         ...state,
//         postList: payload,
//       };
//     case SEARCH_POSTS:
//       if (inputVal.length > 0) {
//         const tmp = state.postList.filter((data) => {
//           const title = data.title.toString();
//           const desc = !isEmpty(data.description) ? data.description : '';
//           const tags = !isEmpty(data.tags) ? data.tags.toString() : '';

//           return (
//             title.match(new RegExp(inputVal, 'i')) !== null ||
//             desc.match(new RegExp(inputVal, 'i')) !== null ||
//             tags.match(new RegExp(inputVal, 'i')) !== null
//           );
//         });

//         return { ...state, searchList: tmp };
//       }
//       return { ...state, searchList: initState.searchList };

//     case RESET_POSTS:
//       return state;
//     default:
//       return state;
//   }
// };

// export default posts;
