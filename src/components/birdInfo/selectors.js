import store from '../../common/store/store';

const getActiveBird = () => store.getState().activeBird;

export default getActiveBird;
