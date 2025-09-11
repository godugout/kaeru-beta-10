export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      analytics_events: {
        Row: {
          app_id: string | null
          created_at: string
          event_category: string | null
          event_data: Json | null
          event_label: string | null
          event_type: string
          event_value: number | null
          id: string
          page_url: string | null
          visitor_id: string
        }
        Insert: {
          app_id?: string | null
          created_at?: string
          event_category?: string | null
          event_data?: Json | null
          event_label?: string | null
          event_type: string
          event_value?: number | null
          id?: string
          page_url?: string | null
          visitor_id: string
        }
        Update: {
          app_id?: string | null
          created_at?: string
          event_category?: string | null
          event_data?: Json | null
          event_label?: string | null
          event_type?: string
          event_value?: number | null
          id?: string
          page_url?: string | null
          visitor_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "analytics_events_visitor_id_fkey"
            columns: ["visitor_id"]
            isOneToOne: false
            referencedRelation: "analytics_visitors"
            referencedColumns: ["visitor_id"]
          },
        ]
      }
      analytics_funnels: {
        Row: {
          app_id: string | null
          completed: boolean | null
          created_at: string
          funnel_name: string
          id: string
          step_name: string
          step_number: number
          visitor_id: string
        }
        Insert: {
          app_id?: string | null
          completed?: boolean | null
          created_at?: string
          funnel_name: string
          id?: string
          step_name: string
          step_number: number
          visitor_id: string
        }
        Update: {
          app_id?: string | null
          completed?: boolean | null
          created_at?: string
          funnel_name?: string
          id?: string
          step_name?: string
          step_number?: number
          visitor_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "analytics_funnels_visitor_id_fkey"
            columns: ["visitor_id"]
            isOneToOne: false
            referencedRelation: "analytics_visitors"
            referencedColumns: ["visitor_id"]
          },
        ]
      }
      analytics_page_views: {
        Row: {
          app_id: string | null
          created_at: string
          entry_page: boolean | null
          exit_page: boolean | null
          id: string
          page_title: string | null
          page_url: string
          time_on_page: number | null
          visitor_id: string
        }
        Insert: {
          app_id?: string | null
          created_at?: string
          entry_page?: boolean | null
          exit_page?: boolean | null
          id?: string
          page_title?: string | null
          page_url: string
          time_on_page?: number | null
          visitor_id: string
        }
        Update: {
          app_id?: string | null
          created_at?: string
          entry_page?: boolean | null
          exit_page?: boolean | null
          id?: string
          page_title?: string | null
          page_url?: string
          time_on_page?: number | null
          visitor_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "analytics_page_views_visitor_id_fkey"
            columns: ["visitor_id"]
            isOneToOne: false
            referencedRelation: "analytics_visitors"
            referencedColumns: ["visitor_id"]
          },
        ]
      }
      analytics_reports: {
        Row: {
          app_id: string | null
          created_at: string
          id: string
          report_data: Json
          report_name: string
          report_period: string
        }
        Insert: {
          app_id?: string | null
          created_at?: string
          id?: string
          report_data: Json
          report_name: string
          report_period: string
        }
        Update: {
          app_id?: string | null
          created_at?: string
          id?: string
          report_data?: Json
          report_name?: string
          report_period?: string
        }
        Relationships: []
      }
      analytics_visitors: {
        Row: {
          app_id: string | null
          conversion_status: string | null
          device_type: string | null
          first_visit_at: string
          id: string
          initial_landing_page: string | null
          last_visit_at: string
          lead_score: number | null
          referrer: string | null
          screen_size: string | null
          user_agent: string | null
          visit_count: number
          visitor_id: string
        }
        Insert: {
          app_id?: string | null
          conversion_status?: string | null
          device_type?: string | null
          first_visit_at?: string
          id?: string
          initial_landing_page?: string | null
          last_visit_at?: string
          lead_score?: number | null
          referrer?: string | null
          screen_size?: string | null
          user_agent?: string | null
          visit_count?: number
          visitor_id: string
        }
        Update: {
          app_id?: string | null
          conversion_status?: string | null
          device_type?: string | null
          first_visit_at?: string
          id?: string
          initial_landing_page?: string | null
          last_visit_at?: string
          lead_score?: number | null
          referrer?: string | null
          screen_size?: string | null
          user_agent?: string | null
          visit_count?: number
          visitor_id?: string
        }
        Relationships: []
      }
      chat_analytics: {
        Row: {
          analysis: Json | null
          app_id: string | null
          created_at: string
          id: string
          message: string
          message_type: string
          project_id: string
          topic: string | null
          visitor_id: string
        }
        Insert: {
          analysis?: Json | null
          app_id?: string | null
          created_at?: string
          id?: string
          message: string
          message_type: string
          project_id: string
          topic?: string | null
          visitor_id: string
        }
        Update: {
          analysis?: Json | null
          app_id?: string | null
          created_at?: string
          id?: string
          message?: string
          message_type?: string
          project_id?: string
          topic?: string | null
          visitor_id?: string
        }
        Relationships: []
      }
      generated_images: {
        Row: {
          app_id: string | null
          created_at: string
          id: string
          image_url: string
          landscape_style: string | null
          prompt: string
          prompt_hash: string
          visualization_style: string | null
        }
        Insert: {
          app_id?: string | null
          created_at?: string
          id?: string
          image_url: string
          landscape_style?: string | null
          prompt: string
          prompt_hash: string
          visualization_style?: string | null
        }
        Update: {
          app_id?: string | null
          created_at?: string
          id?: string
          image_url?: string
          landscape_style?: string | null
          prompt?: string
          prompt_hash?: string
          visualization_style?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          app_id: string | null
          created_at: string
          first_name: string | null
          id: string
          last_name: string | null
          role: string | null
          updated_at: string
        }
        Insert: {
          app_id?: string | null
          created_at?: string
          first_name?: string | null
          id: string
          last_name?: string | null
          role?: string | null
          updated_at?: string
        }
        Update: {
          app_id?: string | null
          created_at?: string
          first_name?: string | null
          id?: string
          last_name?: string | null
          role?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      project_images: {
        Row: {
          app_id: string | null
          created_at: string
          description: string
          features: string[] | null
          id: string
          image_url: string
          materials: string[] | null
          primary_project_type: string
          project_type_scores: Json | null
          style: string
          tags: string[] | null
          title: string
          updated_at: string
        }
        Insert: {
          app_id?: string | null
          created_at?: string
          description: string
          features?: string[] | null
          id?: string
          image_url: string
          materials?: string[] | null
          primary_project_type?: string
          project_type_scores?: Json | null
          style?: string
          tags?: string[] | null
          title: string
          updated_at?: string
        }
        Update: {
          app_id?: string | null
          created_at?: string
          description?: string
          features?: string[] | null
          id?: string
          image_url?: string
          materials?: string[] | null
          primary_project_type?: string
          project_type_scores?: Json | null
          style?: string
          tags?: string[] | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      ticket_attachments: {
        Row: {
          app_id: string | null
          created_at: string
          file_name: string | null
          file_path: string
          file_type: string | null
          id: string
          ticket_id: string | null
        }
        Insert: {
          app_id?: string | null
          created_at?: string
          file_name?: string | null
          file_path: string
          file_type?: string | null
          id?: string
          ticket_id?: string | null
        }
        Update: {
          app_id?: string | null
          created_at?: string
          file_name?: string | null
          file_path?: string
          file_type?: string | null
          id?: string
          ticket_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ticket_attachments_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: false
            referencedRelation: "tickets"
            referencedColumns: ["id"]
          },
        ]
      }
      ticket_categories: {
        Row: {
          app_id: string | null
          created_at: string
          description: string | null
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          app_id?: string | null
          created_at?: string
          description?: string | null
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          app_id?: string | null
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      ticket_tags: {
        Row: {
          app_id: string | null
          created_at: string
          id: string
          name: string
        }
        Insert: {
          app_id?: string | null
          created_at?: string
          id?: string
          name: string
        }
        Update: {
          app_id?: string | null
          created_at?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      tickets: {
        Row: {
          app_id: string | null
          assigned_to: string | null
          category: string | null
          created_at: string
          design_preference: string | null
          email: string
          id: string
          message: string
          name: string
          phone: string | null
          priority: string | null
          project_type: string | null
          resolution_notes: string | null
          resolved_at: string | null
          source: string | null
          status: string | null
          tags: string[] | null
          title: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          app_id?: string | null
          assigned_to?: string | null
          category?: string | null
          created_at?: string
          design_preference?: string | null
          email: string
          id?: string
          message: string
          name: string
          phone?: string | null
          priority?: string | null
          project_type?: string | null
          resolution_notes?: string | null
          resolved_at?: string | null
          source?: string | null
          status?: string | null
          tags?: string[] | null
          title?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          app_id?: string | null
          assigned_to?: string | null
          category?: string | null
          created_at?: string
          design_preference?: string | null
          email?: string
          id?: string
          message?: string
          name?: string
          phone?: string | null
          priority?: string | null
          project_type?: string | null
          resolution_notes?: string | null
          resolved_at?: string | null
          source?: string | null
          status?: string | null
          tags?: string[] | null
          title?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      user_activities: {
        Row: {
          activity_data: Json | null
          activity_type: string
          app_id: string | null
          created_at: string
          id: string
          user_id: string | null
        }
        Insert: {
          activity_data?: Json | null
          activity_type: string
          app_id?: string | null
          created_at?: string
          id?: string
          user_id?: string | null
        }
        Update: {
          activity_data?: Json | null
          activity_type?: string
          app_id?: string | null
          created_at?: string
          id?: string
          user_id?: string | null
        }
        Relationships: []
      }
      user_feedback: {
        Row: {
          anonymous: boolean
          app_id: string | null
          created_at: string
          id: string
          message: string | null
          page_url: string
          sentiment: string
          user_id: string | null
        }
        Insert: {
          anonymous?: boolean
          app_id?: string | null
          created_at?: string
          id?: string
          message?: string | null
          page_url: string
          sentiment: string
          user_id?: string | null
        }
        Update: {
          anonymous?: boolean
          app_id?: string | null
          created_at?: string
          id?: string
          message?: string | null
          page_url?: string
          sentiment?: string
          user_id?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          app_id: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          app_id?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          app_id?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      count_table_rows: {
        Args: { table_name: string; schema_name?: string }
        Returns: number
      }
      create_beehively_product: {
        Args: {
          p_name: string
          p_description: string
          p_price: number
          p_category: string
          p_image_url: string
        }
        Returns: Json
      }
      create_beehively_user: {
        Args: { p_email: string; p_name: string; p_auth_user_id: string }
        Returns: Json
      }
      delete_beehively_product: {
        Args: { p_id: string }
        Returns: Json
      }
      generate_daily_analytics_report: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      get_beehively_events: {
        Args: Record<PropertyKey, never>
        Returns: unknown[]
      }
      get_beehively_hives: {
        Args: Record<PropertyKey, never>
        Returns: unknown[]
      }
      get_beehively_media: {
        Args: Record<PropertyKey, never>
        Returns: unknown[]
      }
      get_beehively_products: {
        Args: Record<PropertyKey, never>
        Returns: unknown[]
      }
      get_beehively_users: {
        Args: Record<PropertyKey, never>
        Returns: unknown[]
      }
      set_admin_role: {
        Args: { user_id: string }
        Returns: undefined
      }
      update_beehively_product: {
        Args: {
          p_id: string
          p_name: string
          p_description: string
          p_price: number
          p_category: string
          p_image_url: string
        }
        Returns: Json
      }
      update_lead_score: {
        Args: { visitor_id_param: string; score_increment: number }
        Returns: undefined
      }
    }
    Enums: {
      app_role: "admin" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user"],
    },
  },
} as const
