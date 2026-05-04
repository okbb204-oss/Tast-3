/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GameProvider } from './contexts/GameContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import CraftPath from './pages/CraftPath';
import LevelFlow from './pages/LevelFlow';
import LessonPage from './pages/LessonPage';
import QuizPage from './pages/QuizPage';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <GameProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="craft/:craftId" element={<CraftPath />} />
                <Route path="craft/:craftId/level/:levelId" element={<LevelFlow />} />
                <Route path="craft/:craftId/level/:levelId/lesson/:lessonId" element={<LessonPage />} />
                <Route path="craft/:craftId/level/:levelId/lesson/:lessonId/quiz" element={<QuizPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </GameProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
