import { StatusBar } from 'expo-status-bar';
import './src/config/ReactotronConfig';
import Routes from './src/routes';
export default function App() {
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#172529" />
    <Routes />
  </>
  );
}

