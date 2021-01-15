import React from 'react';
import { PDFViewer,PDFDownloadLink, Page,
  Document, Text, View, StyleSheet 
} from '@react-pdf/renderer';
import BaseLayout from "../frame/Base";
import pathName from "routes/pathName";

export default () => {
  const contentProps = {
    breadcrumb : [
      { text : 'Home', link : pathName.home },
      { text : 'Form' },
    ],
    title : 'Example Form',
    subtitle : 'This is example form input',
  };
 
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});
 
// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

const DocDownload = () => {
  return (<PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
    {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
  </PDFDownloadLink>)
}

  return(
  <BaseLayout {...contentProps}>
    <div>
      <DocDownload />
    </div>
    <PDFViewer style={{height:'100vh', width:'80vw'}}>
      <MyDocument />
    </PDFViewer>
  </BaseLayout>
  );
}
