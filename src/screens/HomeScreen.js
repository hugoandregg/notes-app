import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import Note from '../components/Note';
import {getNotes} from '../services/NoteService';
import CustomActivityIndicator from '../components/CustomActivityIndicator';
import ViewContainer from '../components/ViewContainer';
import CreateNoteButton from '../components/CreateNoteButton';

export default ({navigation}) => {
  const [notes, setNotes] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const getListNotes = async () => {
    setLoading(true);
    const pagination = `?page=${page}&per_page=8`;
    const list = await getNotes(pagination);
    setNotes([...notes, ...list]);
    setPage(page + 1);
    setLoading(false);
  };

  useEffect(() => {
    getListNotes();
  }, []);

  return (
    <ViewContainer>
      <FlatList
        data={notes}
        renderItem={({item}) => <Note item={item} />}
        keyExtractor={item => item._id}
        numColumns={2}
        onEndReached={getListNotes}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          loading && <CustomActivityIndicator size="small" />
        }
      />
      <CreateNoteButton navigation={navigation} />
    </ViewContainer>
  );
};
