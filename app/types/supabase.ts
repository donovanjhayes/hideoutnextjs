export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      updates: {
        Row: {
          id: number
          created_at: string
          title: string
          content: string
        }
        Insert: {
          id?: number
          created_at?: string
          title: string
          content: string
        }
        Update: {
          id?: number
          created_at?: string
          title?: string
          content?: string
        }
      }
    }
  }
}