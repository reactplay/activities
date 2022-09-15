import Card from "/components/Ideas/Card";
import styles from '/styles/idea.module.css';
import { Grid, AutoSizer } from "react-virtualized";
import axios from "axios";
import Layout from "../components/Layout";


const IdeaListingPage = ({ data }) => {

  const CellRender = (columnIndex, key, rowIndex, style) => {
    const row = Number(rowIndex.split("-")[0]);
    const ind = (row * 3) + columnIndex;

    if (ind < data.length) {
      return (
        <Card data={data[ind]} style={style} />
      );
    }
    return null;

  }

  return (
    <Layout title="HACK-R-PLAY" description="A hackathon hosted by ReactPlay">
      <main className={`${styles.container} `}>

        <AutoSizer>
          {
            ({ width, height }) => {
              return (
                <Grid
                  cellRenderer={({ columnIndex, key, rowIndex, style }) => (CellRender(columnIndex, rowIndex, key, style))}
                  columnWidth={380}
                  height={height}
                  containerStyle={{
                    marginLeft: '5%',
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                  columnCount={3}
                  overscanColumnCount={1}
                  overscanRowCount={1}
                  rowHeight={430}
                  rowCount={Math.ceil(data.length / 3)}
                  width={width}
                />

              );
            }
          }
        </AutoSizer>

      </main>
    </Layout >
  );
};

export async function getServerSideProps() {
  const res = await axios('http://localhost:3000/api/ideas');
  console.log(res.data);
  const data = res.data.data;
  return { props: { data } };
}

export default IdeaListingPage;
