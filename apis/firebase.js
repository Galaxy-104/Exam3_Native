import firestore from '@react-native-firebase/firestore';

const getRef = (collections) => {
  return firestore().collection(collections);
}

export const addData = async (collections, data) => {
  await getRef(collections).add(data);
}

export const getCollection = (collections, onResult, onError, query, order, limit) => {
  let ref = getRef(collections);

  if(query && query.exists && query.condition && query.condition.length !== 0){
    ref = ref.where(...query.condition);
  }

  if(order && order.exists && order.condition && order.condition.length !== 0){
    ref = ref.orderBy(...order.condition);
  }

  if(limit && limit.exists && limit.condition){
    ref = ref.limit(limit.condition);
  }

  return ref.onSnapshot(onResult, onError);
}

export const getCurrentTime = () => {
  return firestore.FieldValue.serverTimestamp();
}