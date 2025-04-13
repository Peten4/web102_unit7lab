import { createClient } from '@supabase/supabase-js'

const URL = 'https://nyrzwvlnedlxxatrtrzr.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55cnp3dmxuZWRseHhhdHJ0cnpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ1ODM1NjEsImV4cCI6MjA2MDE1OTU2MX0.2_jJfwPRRxeR1lZFSc8SGrF6XiQAJVpwZtmE_Wd4nXw';


export const supabase = createClient(URL, API_KEY);