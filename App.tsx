import { useState } from 'react';
import { StyleSheet, View, ScrollView, Alert, ActivityIndicator , Text } from 'react-native';
import Markdown from 'react-native-markdown-display';
import DiagnosisForm from './components/DiagnosisForm';
import { getDiagnosis } from './services/gemini';
export default function App() {
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    mileage: '',
    problem: '',
    symptoms: ''
  });
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!Object.values(formData).every(val => val.trim())) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    try {
      setLoading(true);
      const response = await getDiagnosis(formData);
      setResult(response);
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch diagnosis');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>AUTO-EXPERT</Text>
        <Text style={styles.subtitle}>Diagnose Your Vehicle Problems with AI</Text>
      </View>

      <DiagnosisForm 
        onSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
      />

      {loading && <ActivityIndicator size="large" color="#2196F3" />}

      {result && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Diagnosis Report</Text>
          <Markdown style={markdownStyles}>{result}</Markdown>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0f4f8',
    paddingBottom: 40,
  },
  header: {
    backgroundColor: '#2196F3',
    padding: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  resultContainer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 20,
    elevation: 3,
  },
  resultTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
});

const markdownStyles = {
  body: { color: '#333' },
  heading1: { fontSize: 20, fontWeight: 'bold', marginVertical: 10 },
  heading2: { fontSize: 18, fontWeight: '600', marginVertical: 8 },
  list_item: { marginVertical: 5 },
  table: { borderWidth: 1, borderColor: '#ddd', marginVertical: 10 },
  th: { backgroundColor: '#f0f0f0', padding: 8, fontWeight: 'bold' },
  td: { padding: 8, borderTopWidth: 1, borderColor: '#ddd' },
};