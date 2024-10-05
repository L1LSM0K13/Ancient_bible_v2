import { pool } from "@/../config/dbConfig";

export async function FetchNoteData(userID: number) {
  const results = await pool.query(
    `SELECT * FROM user_notes WHERE user_id = $1 ORDER BY verse_id`,
    [userID],
  );

  return results.rows;
}
