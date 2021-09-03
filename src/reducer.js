export const initialState = {
  user: null,
  //We are currently setting the token value as a string so that we don't have to login again and again, remember to set it to null before deploying
  //   token:
  //     "BQAMeUfEOSdIs0hqR2O7O7kHih827exeM-WkE6O81pgct9OEXzu9xNbnrB2LdrQBST82OTgDTPWDxv3C4l0CPuMqrImlv6PkenUm2-Q2PsLWjJmjpSt36w7mcyrg-V9M6Hci1VVjIEUp41ra6nQTMdk68kndtIR9mh0u51_eX0RUTs3i",
  playlists: [],
  recentlyPlayedTracks: [],
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "RECENTLY_PLAYED_TRACKS":
      return {
        ...state,
        recentlyPlayedTracks: action.recentlyPlayedTracks,
      };
    default:
      return state;
  }
};

export default reducer;
