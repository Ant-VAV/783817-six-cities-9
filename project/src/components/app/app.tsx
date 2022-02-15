import Main, { MainProps } from '../main/main';

function App(props: MainProps): JSX.Element {
  const { rentOffersTotal } = props;
  return <Main rentOffersTotal={rentOffersTotal}/>;
}

export default App;
