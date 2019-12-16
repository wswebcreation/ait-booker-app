export const RoomTypes = {
  FETCH_ROOMS: 'FETCH_ROOMS',
};

export const RoomActions = {
  fetchRooms: response => ({
    type: RoomTypes.FETCH_ROOMS,
    payload: response.rooms,
  }),
};
