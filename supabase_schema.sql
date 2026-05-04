-- Schema for "HIRFATI" Application

-- Create custom types for ENUMS
CREATE TYPE difficulty_level AS ENUM ('easy', 'medium', 'hard');
CREATE TYPE question_type AS ENUM ('multiple_choice', 'true_false', 'matching', 'ordering');

-- 1. Specializations Table
CREATE TABLE specializations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  category VARCHAR(100) NOT NULL,
  duration VARCHAR(100) NOT NULL,
  admission_level VARCHAR(100) NOT NULL,
  certificate VARCHAR(100) NOT NULL,
  skills TEXT[] NOT NULL,
  subjects TEXT[] NOT NULL,
  job_opportunities TEXT[] NOT NULL,
  salary_range VARCHAR(100),
  freelance_possible BOOLEAN DEFAULT false,
  image_url TEXT,
  source TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now())
);

-- 2. Exams Table
CREATE TABLE exams (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  specialization_id UUID REFERENCES specializations(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  difficulty difficulty_level NOT NULL,
  duration_minutes INTEGER NOT NULL,
  passing_score INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now())
);

-- 3. Questions Table
CREATE TABLE questions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  exam_id UUID REFERENCES exams(id) ON DELETE CASCADE,
  type question_type NOT NULL,
  question TEXT NOT NULL,
  options JSONB, -- For MCQs and Ordering
  pairs JSONB,   -- For Matching logic
  correct_answer JSONB NOT NULL,
  points INTEGER DEFAULT 10,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now())
);

-- 4. User Profiles Table (Extending Supabase Auth Users)
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  full_name VARCHAR(255),
  avatar_url TEXT,
  xp INTEGER DEFAULT 0,
  level INTEGER DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now())
);

-- 5. Exam Attempts Table
CREATE TABLE exam_attempts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  exam_id UUID REFERENCES exams(id) ON DELETE CASCADE,
  answers JSONB NOT NULL,
  score INTEGER NOT NULL,
  percentage NUMERIC(5, 2) NOT NULL,
  passed BOOLEAN NOT NULL,
  completed_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now())
);

-- 6. Achievements Table
CREATE TABLE achievements (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  title VARCHAR(100) NOT NULL,
  description TEXT,
  badge_icon VARCHAR(100),
  earned_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now())
);

-- Row Level Security (RLS) setup
ALTER TABLE specializations ENABLE ROW LEVEL SECURITY;
ALTER TABLE exams ENABLE ROW LEVEL SECURITY;
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE exam_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE achievements ENABLE ROW LEVEL SECURITY;

-- Allow read access to all users for specializations, exams, and questions
CREATE POLICY "Allow public read access for specializations" ON specializations FOR SELECT USING (true);
CREATE POLICY "Allow public read access for exams" ON exams FOR SELECT USING (true);
CREATE POLICY "Allow public read access for questions" ON questions FOR SELECT USING (true);

-- Users can only read/update their own profile
CREATE POLICY "Users can view own profile" ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);

-- Users can only view and create their own exam attempts
CREATE POLICY "Users can view own attempts" ON exam_attempts FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create own attempts" ON exam_attempts FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Users can only view their own achievements
CREATE POLICY "Users can view own achievements" ON achievements FOR SELECT USING (auth.uid() = user_id);
