import { Link, Typography } from "@mui/joy";
import Box from "@mui/joy/Box";
import { useEffect, useState } from "react";

export default function Projects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <Box>
      <Typography>
        <Link href="https://jorah-ty.web.app/">
          My old website
        </Link>
      </Typography>
    </Box>
  );
}
