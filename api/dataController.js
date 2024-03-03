const pool = require('./db')

const getData = async (req, res) => {
  try {
    const { search, sortBy } = req.query
    
    let query = 'SELECT * FROM userinfo'

    if (search) {
      query += ` WHERE customer_name ILIKE '%${search}%' OR location ILIKE '%${search}%'`
    }

    if (sortBy) {
      query += ` ORDER BY ${sortBy}`
    }

    const result = await pool.query(query)

    res.json(result.rows)
  } catch (error) {
    console.error('Error fetching data:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

module.exports = { getData }
