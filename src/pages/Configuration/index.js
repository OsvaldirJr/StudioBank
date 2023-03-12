import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, SafeAreaView} from './styles';

export default function Configuration({ navigation }) {
    return (
    <SafeAreaView>
        <Container>
            <Icon name="menu" size={24} color="#FFF" onPress={()=>{navigation.openDrawer()}}/>
            <Header />
        </Container>
    </SafeAreaView>)
}