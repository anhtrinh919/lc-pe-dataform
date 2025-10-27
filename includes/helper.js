// Helper to pick the mode (most frequent non-null) value.
// Use inside SELECT as: ${modeExpr("division")}
module.exports.modeExpr = col =>
  `ANY_VALUE(x.${col}) OVER (PARTITION BY subdept_code ORDER BY x.cnt DESC, x.${col})`;