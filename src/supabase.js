import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://iczbfwfeulzwqzkrbmqw.supabase.co';
const supabaseAnonKey = 'sb_publishable_bUYBt5o87tvU2J6PAyXuOw_8Ugi4z4w';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
