// php获取前一个小时的时间：
  $mtime = date("Y-m-d H:i:s", strtotime("-1 hour"));
// php获取前一天的时间：
  $mtime = date("Y-m-d H:i:s", strtotime("-1 day"));
// php获取三天前的时间：
  $mtime = date("Y-m-d H:i:s", strtotime("-3 day"));
// php获取前一个月的时间：
  $mtime = date("Y-m-d H:i:s", strtotime("-1 month"));
// php获取三个月前的时间：
  $mtime = date("Y-m-d H:i:s", strtotime("-3 month"));
// php获取前一年的时间：
  $mtime = date("Y-m-d H:i:s", strtotime("-1 year"));
// php获取今天的时时间
  $start_time = date('Y-m-d H:00:00', strtotime('today'));
  $end_time = date('Y-m-d', strtotime('today')).' 24:00:00';
// php获取本月时间
  $firstday = date("Y-m-01", strtotime(date("Y-m-d"))).' 00:00:00';
  $lastday = date("Y-m-d", strtotime("$firstday +1 month -1 day")).' 24:00:00';
