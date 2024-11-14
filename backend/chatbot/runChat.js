import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold
} from "@google/generative-ai"

const API_KEY = 'AIzaSyBs4rF6W3xLJOuPZxrYigOzVphrXdmyoCA  '

const MODEL_NAME = 'gemini-1.0-pro'


const GENERATION_CONFIG = {
  temperature: 1.3,
  topK: 1,
  topP: 1,
  maxOutputTokens: 2048
}

const SAFETY_SETTINGS = [
  { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
  { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
  { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE }
]

export const runChat = async (userInput) => {
  const genAI = new GoogleGenerativeAI(API_KEY)
  
  const model = genAI.getGenerativeModel({ model: MODEL_NAME})

  const chat = model.startChat({
    generationConfig: GENERATION_CONFIG,
    safetySettings: SAFETY_SETTINGS, 
    history:  []
  })

  const result = await chat.sendMessage(userInput)

  const response = result.response.text()
  return response
}

