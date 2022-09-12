import Card from "/components/Ideas/Card";
import styles from '/styles/idea.module.css';
import { Grid, AutoSizer } from "react-virtualized";

const listOfIdeas = [
  {
    id: 1,
    title: 'Idea title',
    description: 'Et amet ea dolor vero sed dolore ut et nonumy takimata, no rebum et erat erat dolore lorem, at sit kasd et sea dolor ipsum stet diam, magna diam sea takimata sea sed, no invidunt aliquyam sed dolores at ipsum voluptua, ut lorem et kasd at sed amet dolores consetetur.',
    avatar_url: [require('/images/user_avatar.png')],
    user_name: ['Shrilaskhmi', 'Koustov'],
    status: 'InProgress'
  },
  {
    id: 2,
    title: 'Idea title2',
    description: 'Et amet ea dolor vero sed dolore ut et nonumy takimata, no rebum et erat erat dolore lorem, at sit kasd et sea dolor ipsum stet diam, magna diam sea takimata sea sed, no invidunt aliquyam sed dolores at ipsum voluptua, ut lorem et kasd at sed amet dolores consetetur.',
    avatar_url: [require('/images/user_avatar.png')],
    user_name: ['Shrilaskhmi', 'Koustov'],
    status: 'Submitted'
  },
  {
    id: 3,
    title: 'Idea title2',
    description: 'Et amet ea dolor vero sed dolore ut et nonumy takimata, no rebum et erat erat dolore lorem, at sit kasd et sea dolor ipsum stet diam, magna diam sea takimata sea sed, no invidunt aliquyam sed dolores at ipsum voluptua, ut lorem et kasd at sed amet dolores consetetur.',
    avatar_url: [require('/images/user_avatar.png')],
    user_name: ['Shrilaskhmi', 'Koustov'],
    status: 'Submitted'
  },
  {
    id: 4,
    title: 'Idea title2',
    description: 'Et amet ea dolor vero sed dolore ut et nonumy takimata, no rebum et erat erat dolore lorem, at sit kasd et sea dolor ipsum stet diam, magna diam sea takimata sea sed, no invidunt aliquyam sed dolores at ipsum voluptua, ut lorem et kasd at sed amet dolores consetetur.',
    avatar_url: [require('/images/user_avatar.png')],
    user_name: ['Shrilaskhmi', 'Koustov'],
    status: 'Not Started'
  },
  {
    id: 5,
    title: 'Idea title2',
    description: 'Et amet ea dolor vero sed dolore ut et nonumy takimata, no rebum et erat erat dolore lorem, at sit kasd et sea dolor ipsum stet diam, magna diam sea takimata sea sed, no invidunt aliquyam sed dolores at ipsum voluptua, ut lorem et kasd at sed amet dolores consetetur.',
    avatar_url: [require('/images/user_avatar.png')],
    user_name: ['Shrilaskhmi', 'Koustov'],
    status: 'Submitted'
  },
  {
    id: 6,
    title: 'Idea title2',
    description: 'Et amet ea dolor vero sed dolore ut et nonumy takimata, no rebum et erat erat dolore lorem, at sit kasd et sea dolor ipsum stet diam, magna diam sea takimata sea sed, no invidunt aliquyam sed dolores at ipsum voluptua, ut lorem et kasd at sed amet dolores consetetur.',
    avatar_url: [require('/images/user_avatar.png')],
    user_name: ['Shrilaskhmi', 'Koustov'],
    status: 'Submitted'
  },
  {
    id: 7,
    title: 'Idea title2',
    description: 'Et amet ea dolor vero sed dolore ut et nonumy takimata, no rebum et erat erat dolore lorem, at sit kasd et sea dolor ipsum stet diam, magna diam sea takimata sea sed, no invidunt aliquyam sed dolores at ipsum voluptua, ut lorem et kasd at sed amet dolores consetetur.',
    avatar_url: [require('/images/user_avatar.png')],
    user_name: ['Shrilaskhmi', 'Koustov'],
    status: 'Submitted'
  },
  {
    id: 8,
    title: 'Idea title2',
    description: 'Et amet ea dolor vero sed dolore ut et nonumy takimata, no rebum et erat erat dolore lorem, at sit kasd et sea dolor ipsum stet diam, magna diam sea takimata sea sed, no invidunt aliquyam sed dolores at ipsum voluptua, ut lorem et kasd at sed amet dolores consetetur.',
    avatar_url: [require('/images/user_avatar.png')],
    user_name: ['Shrilaskhmi', 'Koustov'],
    status: 'Submitted'
  },
  {
    id: 9,
    title: 'Idea title2',
    description: 'Et amet ea dolor vero sed dolore ut et nonumy takimata, no rebum et erat erat dolore lorem, at sit kasd et sea dolor ipsum stet diam, magna diam sea takimata sea sed, no invidunt aliquyam sed dolores at ipsum voluptua, ut lorem et kasd at sed amet dolores consetetur.',
    avatar_url: [require('/images/user_avatar.png')],
    user_name: ['Shrilaskhmi', 'Koustov'],
    status: 'Submitted'
  },
  {
    id: 10,
    title: 'Idea title2',
    description: 'Et amet ea dolor vero sed dolore ut et nonumy takimata, no rebum et erat erat dolore lorem, at sit kasd et sea dolor ipsum stet diam, magna diam sea takimata sea sed, no invidunt aliquyam sed dolores at ipsum voluptua, ut lorem et kasd at sed amet dolores consetetur.',
    avatar_url: [require('/images/user_avatar.png'), require('/images/user_avatar.png')],
    user_name: ['Shrilaskhmi', 'Koustov'],
    status: 'Submitted'
  }
];


const IdeaListingPage = () => {

  const CellRender = (columnIndex, key, rowIndex, style) => {
    const row = Number(rowIndex.split("-")[0]);
    const ind = (row * 3) + columnIndex;

    if (ind < listOfIdeas.length) {
      return (
        <Card data={listOfIdeas[ind]} style={style} />
      );
    }
    return null;

  }
  console.log(Math.ceil(listOfIdeas.length / 3));
  return (
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
                rowCount={Math.ceil(listOfIdeas.length / 3)}
                width={width}
              />

            );
          }
        }
      </AutoSizer>


    </main>

  );
};
export default IdeaListingPage;
